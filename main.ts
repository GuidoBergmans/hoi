namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    assets.animation`bee`,
    100,
    true
    )
    bee.setPosition(cat.x + 80, cat.x - 80)
    bee.follow(cat)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (cat.y < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let cat: Sprite = null
scene.setBackgroundColor(9)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 1 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cat, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
cat.ay = 350
scene.cameraFollowSprite(cat)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 4 4 4 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 4 4 4 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 a . . a 3 . . . . . . 
        . . . . a 3 2 2 3 a . . . . . . 
        . . 7 7 . a 3 3 a . . . . . . . 
        . . 7 7 7 . c c . 7 7 . . . . . 
        . . . 8 7 7 7 . 7 7 7 . . . . . 
        . . . 8 8 7 7 7 7 8 . . . . . . 
        . . . . . 8 7 7 8 . . . . . . . 
        . . . . . . 7 8 . . . . . . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
