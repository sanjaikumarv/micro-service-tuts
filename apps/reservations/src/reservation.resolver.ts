import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReservationDocument } from './models/reservation.schema';
import { ReservationsService } from './reservations.service';
import { CurrentUser, type UserDto } from '@app/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Resolver(() => ReservationDocument)
export class ReservationResolver {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Mutation(() => [ReservationDocument])
  async createReservations(
    @Args('createReservationInput')
    createReservationInput: CreateReservationDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.reservationsService.create(createReservationInput, user);
  }

  @Query(() => [ReservationDocument], { name: 'reservations' })
  findAll() {
    this.reservationsService.findAll();
  }
  @Query(() => [ReservationDocument], { name: 'reservation' })
  findOne(@Args('id') id: string) {
    this.reservationsService.findOne(id);
  }

  @Mutation(() => [ReservationDocument], { name: 'removeReservation' })
  removeReservation(@Args('id', { type: () => String }) id: string) {
    return this.reservationsService.remove(id);
  }
}
