export interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar: string;
  occasion: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "Sarah created the most beautiful cake for my daughter's 5th birthday. Not only did it look amazing, but it tasted incredible too! Everyone at the party was impressed.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    occasion: "Birthday Celebration"
  },
  {
    id: 2,
    name: "Michael & David",
    text: "Our wedding cake was an absolute dream come true. Sarah listened to our ideas and created something even better than we imagined. The flavors were perfect, and it looked stunning in our photos.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    occasion: "Wedding"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    text: "I've ordered multiple cakes from Sweet Creations for various occasions, and they never disappoint. Sarah has a true talent for baking and art. The attention to detail is remarkable!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    occasion: "Regular Customer"
  }
];