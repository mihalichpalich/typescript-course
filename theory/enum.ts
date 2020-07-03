enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership); //вывод номера
console.log(membershipReverse); //название

enum SocialMedia {
    VK = 'vk.com',
    FACEBOOK = 'facebook.com',
    INSTAGRAM = 'instagram.com'
}

const social = SocialMedia.VK;
console.log(social);