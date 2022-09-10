import { expect, test } from "vitest"
import { getFutureDate } from "../tests/utils/get-future-date";
import { Appointment } from "./appointment"

test('Create and appointment', () => {
  const startsAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-11')

  const appointment = new Appointment({
    customer: "Jhon Doe",
    startsAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.custumer).toEqual('Jhon Doe')
})

test('Cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-09')

  expect(() => {
    return new Appointment({
      customer: "Jhon Doe",
      startsAt,
      endsAt,
    })
  }).toThrow();

})

test('Cannot create an appointment with start date before now', () => {

  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)


  expect(() => {
    return new Appointment({
      customer: "Jhon Doe",
      startsAt,
      endsAt,
    })
  }).toThrow();

})