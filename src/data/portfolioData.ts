export interface Project {
  id: string;
  title: string;
  location: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "gary-deck-and-pool",
    title: "Gary Deck & Pool",
    location: "Local Project",
    coverImage: "/images/Cranmeer1.webp",
    images: [
      "/images/Cranmeer1.webp",
      "/images/Cranmeer2.webp",
      "/images/Cranmeer3.webp",
      "/images/Cranmeer4.webp",
      "/images/Cranmeer5.webp"
    ]
  },
  {
    id: "mdp-roof-repair",
    title: "MDP Roof Repair",
    location: "Local Project",
    coverImage: "/images/MDPRoofRepair1.webp",
    images: [
      "/images/MDPRoofRepair1.webp",
      "/images/MDPRoofRepair2.webp",
      "/images/MDPRoofRepair3.webp",
      "/images/MDPRoofRepair4.webp"
    ]
  },
  {
    id: "pebble-creek",
    title: "Pebble Creek",
    location: "Local Project",
    coverImage: "/images/PebbleCreek1.webp",
    images: [
      "/images/PebbleCreek1.webp",
      "/images/PebbleCreek2.webp",
      "/images/PebbleCreek3.webp",
      "/images/PebbleCreek4.webp",
      "/images/PebbleCreek5.webp"

    ]
  },
  {
    id: "timber-frame-event-center",
    title: "Timber Frame Event Center",
    location: "Nashville, TN",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFLu3vRidi4jlr7MVMdw_kqy3LFRbWF6f8i3iYDrTTC077af8fZoyvDcpGudbKmTJhj6UheH55s_ZKvgcNeVpSdtm9hV0K2OnPKcQxXVBg9xijepZOkaMD_rahnYFHDfTzHZbRWlUoPGWtkzaRvrnNJV_cV36ompcziG347F5MwQtW1c0fDozOemCpTMOjmmoPrMSg0JMq4TmBK9uKQNtfzYzNJvGRLZHh5xzBHP_Sbv1VpvHBcGoTagDDwxcwIJnn2Iz5sFUjzqi",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFLu3vRidi4jlr7MVMdw_kqy3LFRbWF6f8i3iYDrTTC077af8fZoyvDcpGudbKmTJhj6UheH55s_ZKvgcNeVpSdtm9hV0K2OnPKcQxXVBg9xijepZOkaMD_rahnYFHDfTzHZbRWlUoPGWtkzaRvrnNJV_cV36ompcziG347F5MwQtW1c0fDozOemCpTMOjmmoPrMSg0JMq4TmBK9uKQNtfzYzNJvGRLZHh5xzBHP_Sbv1VpvHBcGoTagDDwxcwIJnn2Iz5sFUjzqi",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD"
    ]
  },
  {
    id: "industrial-brewery",
    title: "Industrial Brewery",
    location: "Portland, OR",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDK20jYaf9CVac9QS2PHK89f_9bFDghbJHaam8TcOGtJDxKnQGwbBjN8GcVQG5CN-_5mzbkT84SHoXmcsOf2M2WExRcAnFcC379xRon2EkKp0dYRooc63Ezw7Q7-BB4AmqxVkSfxVzF4PMOIsvnp1GfiOsEfR21l1FrIDCse3N59L9t82Nknhk-23ypz1YUpkduJFFAYC63YLNMccUuBaMiwvmIIhrypmY-zxFI53AtLpn4lMMR6sLL66RD9kO0ZtrbAIK2ZX1DKS",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDK20jYaf9CVac9QS2PHK89f_9bFDghbJHaam8TcOGtJDxKnQGwbBjN8GcVQG5CN-_5mzbkT84SHoXmcsOf2M2WExRcAnFcC379xRon2EkKp0dYRooc63Ezw7Q7-BB4AmqxVkSfxVzF4PMOIsvnp1GfiOsEfR21l1FrIDCse3N59L9t82Nknhk-23ypz1YUpkduJFFAYC63YLNMccUuBaMiwvmIIhrypmY-zxFI53AtLpn4lMMR6sLL66RD9kO0ZtrbAIK2ZX1DKS"
    ]
  },
  {
    id: "custom-steel-staircase",
    title: "Custom Steel Staircase",
    location: "Chicago, IL",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD"
    ]
  }
];
