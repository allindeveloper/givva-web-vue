import type { CreateCurationFormType, Gift } from "@/types/curation";
import cakeimage from "@/assets/image/cake-image.png";
import heelsimage from "@/assets/image/heels-image.png"
import makeupimage from "@/assets/image/makeup-image.png"
import bagimage from "@/assets/image/bag-image.png"
import braceletimage from "@/assets/image/bracelet-image.png"
import glassesimage from "@/assets/image/glasses-image.png"

export const dummyGifts: Gift[] = [
    {
        name: "Cake",
        image: cakeimage,
    },
    {
        name: "Heels",
        image: heelsimage,
    },
    {
        name: "Makeup",
        image: makeupimage,
    },
    {
        name: "Bag",
        image: bagimage,
    },
    {
        name: "Bracelet",
        image: braceletimage,
    },
    {
        name: "Glasses",
        image: glassesimage,
    },
];

export const dummyCurations: CreateCurationFormType[] = [
  {
    name: "Birthday",
    ageRange: "18-25",
    relationship: "Friend",
    interests: "Music, Games",
    occassion: "Birthday",
    note: "For a close friend who loves concerts",
    giftTypes: [dummyGifts[0], dummyGifts[1]],
  },
  {
    name: "Anniversary",
    ageRange: "45-55",
    relationship: "Partner",
    interests: "Travel, Food",
    occassion: "Anniversary",
    note: "Romantic dinner setup",
    giftTypes: [dummyGifts[4], dummyGifts[5]],
  },
  {
    name: "Christmas",
    ageRange: "45-55",
    relationship: "Family",
    interests: "Decor, Gifts",
    occassion: "Christmas",
    note: "Family-centered celebration",
    giftTypes: [dummyGifts[0], dummyGifts[5]],
  },
  {
    name: "Graduation",
    ageRange: "18-25",
    relationship: "Sibling",
    interests: "Books, Gadgets",
    occassion: "Graduation",
    note: "Encourage them for next journey",
    giftTypes: [dummyGifts[3], dummyGifts[5]],
  },
  {
    name: "Valentine's Day",
    ageRange: "18-25",
    relationship: "Partner",
    interests: "Flowers, Chocolate",
    occassion: "Valentine's",
    note: "Keep it romantic and simple",
    giftTypes: [dummyGifts[4], dummyGifts[1]],
  },
  {
    name: "Housewarming",
    ageRange: "45-55",
    relationship: "Friend",
    interests: "Home Decor",
    occassion: "Housewarming",
    note: "Practical home gifts",
    giftTypes: [dummyGifts[5], dummyGifts[0]],
  },
  {
    name: "Baby Shower",
    ageRange: "25-35",
    relationship: "Colleague",
    interests: "Baby clothes, Toys",
    occassion: "Baby Shower",
    note: "Useful for the newborn",
    giftTypes: [dummyGifts[3], dummyGifts[5]],
  },
  {
    name: "Farewell",
    ageRange: "35-45",
    relationship: "Colleague",
    interests: "Travel, Keepsakes",
    occassion: "Farewell",
    note: "A memory gift before relocation",
    giftTypes: [dummyGifts[5], dummyGifts[4]],
  },
  {
    name: "Engagement",
    ageRange: "25-35",
    relationship: "Cousin",
    interests: "Jewelry, Celebration",
    occassion: "Engagement",
    note: "Celebrate the love story",
    giftTypes: [dummyGifts[1], dummyGifts[4]],
  },
  {
    name: "Easter",
    ageRange: "25-35",
    relationship: "Family",
    interests: "Religion, Chocolates",
    occassion: "Easter",
    note: "Faith and celebration",
    giftTypes: [dummyGifts[0], dummyGifts[5]],
  },
  {
    name: "Retirement",
    ageRange: "55+",
    relationship: "Parent",
    interests: "Books, Relaxation",
    occassion: "Retirement",
    note: "A calm and memorable gift",
    giftTypes: [dummyGifts[5], dummyGifts[3]],
  },
  {
    name: "New Job",
    ageRange: "22-35",
    relationship: "Friend",
    interests: "Office Supplies",
    occassion: "New Job",
    note: "Encourage for new beginnings",
    giftTypes: [dummyGifts[3], dummyGifts[5]],
  },
  {
    name: "Get Well Soon",
    ageRange: "45-55",
    relationship: "Relative",
    interests: "Flowers, Books",
    occassion: "Health",
    note: "Uplift their mood",
    giftTypes: [dummyGifts[0], dummyGifts[4]],
  },
  {
    name: "Promotion",
    ageRange: "35-45",
    relationship: "Colleague",
    interests: "Watches, Accessories",
    occassion: "Promotion",
    note: "Celebrate success",
    giftTypes: [dummyGifts[5], dummyGifts[1]],
  },
  {
    name: "Mother's Day",
    ageRange: "45-55",
    relationship: "Mother",
    interests: "Flowers, Jewelry",
    occassion: "Mother's Day",
    note: "Show appreciation",
    giftTypes: [dummyGifts[4], dummyGifts[0]],
  },
  {
    name: "Father's Day",
    ageRange: "45-55",
    relationship: "Father",
    interests: "Watches, Gadgets",
    occassion: "Father's Day",
    note: "Show gratitude",
    giftTypes: [dummyGifts[5], dummyGifts[4]],
  },
  {
    name: "Thank You",
    ageRange: "35-45",
    relationship: "Mentor",
    interests: "Books, Wine",
    occassion: "Appreciation",
    note: "Say thanks meaningfully",
    giftTypes: [dummyGifts[0], dummyGifts[3]],
  },
  {
    name: "Friendship",
    ageRange: "18-25",
    relationship: "Best Friend",
    interests: "Games, Movies",
    occassion: "Friendship Day",
    note: "For fun times",
    giftTypes: [dummyGifts[1], dummyGifts[4]],
  },
  {
    name: "Wedding",
    ageRange: "25-35",
    relationship: "Friend",
    interests: "Household items",
    occassion: "Wedding",
    note: "Support their new home",
    giftTypes: [dummyGifts[4], dummyGifts[3]],
  },
  {
    name: "Back to School",
    ageRange: "5-10",
    relationship: "Sibling",
    interests: "Stationery, Backpacks",
    occassion: "School",
    note: "Encourage studies",
    giftTypes: [dummyGifts[3], dummyGifts[0]],
  },
];

export const ageRanges = [
  { label: "5-10", value: "5-10" },
    { label: "10-18", value: "10-18" },
    { label: "18-25", value: "18-25" },
     { label: "25-35", value: "25-35" },
    { label: "35-45", value: "35-45" },
    { label: "45-55", value: "45-55" },
     { label: "55+", value: "55+" },
];

export const relationshipData = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
];

export const ocassionData = [
    { label: "Wedding", value: "wedding" },
    { label: "Birthday", value: "birthday" },
    { label: "Burial", value: "Burial" },
    { label: "Child Dedication", value: "Child Dedication" },
];