const today = new Date();

export function getAge(birthDate) {
    if (birthDate <= 0) {
        throw new Error('Pass correct date to getAge function');
    }

    const diff = new Date(today - birthDate);

    return Math.abs(diff.getUTCFullYear() - 1970);
}
