<template>
  <Jumbotron>
    <p class="text-primary-dark text-2xl">
      Welcome to the wedding website for Connor and Nora! We are excited to
      share the details of our upcoming wedding celebration with you.
    </p>
    <br />
    <h2 class="text-3xl">Date &amp; Time</h2>
    <p>
      We will be getting married on June 10th, 2023 at the beautiful Cannon Room
      in downtown Raleigh, North Carolina. The ceremony will start at 5:00 pm,
      and we kindly ask that guests arrive at 4:30 pm to allow for time to find
      parking and settle in before the ceremony begins.
    </p>
    <br />
    <h2 class="text-3xl">Venue</h2>
    <p class="text-primary-dark">
      <a
        target="_blank"
        class="underline bold"
        href="https://www.cannonroomraleigh.com/"
        >The Cannon Room</a
      >
      is an event space located on the 12th floor of 16 W Martin St in downtown
      Raleigh. With its panoramic views of the city and chic decor, it is the
      perfect setting for our special day.
    </p>
    <br />
    <h2 class="text-3xl">Accommodations</h2>
    <p>
      We understand that many of our guests will be traveling from out of town
      to join us on our special day. To make your stay as comfortable and
      convenient as possible, we have arranged for discounted room rates at the
      City Center Marriott in downtown Raleigh. The City Center Marriott is a
      luxurious hotel located in the heart of downtown Raleigh, just a few
      minutes' drive from our wedding venue. With spacious rooms, comfortable
      beds, and a range of amenities, it's the perfect place to relax and
      recharge after a long day of celebrations. To book a room at the
      discounted rate, please use the following link:
      <a
        target="_blank"
        class="underline bold"
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1675457147026&key=GRP&app=resvlink"
        >Book your room</a
      >
      Please note that the discounted rate is only available for a limited time,
      so we encourage you to book your room as soon as possible. We hope that
      you'll take advantage of this special offer and make the most of your time
      in Raleigh. If you have any questions or need further assistance, please
      don't hesitate to contact us. We can't wait to celebrate with you!
    </p>
  </Jumbotron>
</template>

<script>
import { defineComponent } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";

export default defineComponent({
  name: "Details.vue",
  components: {
    Jumbotron,
  },
});
</script>

<style></style>
