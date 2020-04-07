function solve(input){
    let text=input[0];
let pattern1=/([:|\*]{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g
let pattern2=/\d/g
let threshold=1
let emCount=0;
let digits=[...text.matchAll(pattern2)];
let emojies=[...text.matchAll(pattern1)];
for (const element of digits) {
    threshold*=element[0];
}

let emojiCoolness={}
for (const emoji of emojies) {
    let emojiArr=emoji[0].split('');
    let ePower=0;
    for (const char of emojiArr) {
        ePower+=char.charCodeAt(0)
    }
    emojiCoolness[emoji[0]]=ePower;
    emCount++;

}

console.log(`Cool threshold: ${threshold}`);
console.log(`${emCount} emojis found in the text. The cool ones are:`);
for (const key in emojiCoolness) {
    if (emojiCoolness[key]>=threshold) {
       console.log(key)
        
    }
}

}

solve(
    [
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
    ]    
)