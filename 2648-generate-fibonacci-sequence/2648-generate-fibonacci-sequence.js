/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
    let prev1 = 1
    let prev2 = 0

    yield prev2
    yield prev1

    while (true) {
        let curr = prev1 + prev2
        yield curr

        prev2 = prev1
        prev1 = curr


    }

}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */