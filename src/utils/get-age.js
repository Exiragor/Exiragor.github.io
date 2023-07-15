const today = new Date();

export function getAge(birthdate) {
    const year_difference = today.getFullYear() - birthdate.getFullYear();
    const one_or_zero =
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
            today.getDate() < birthdate.getDate())
            ? 1
            : 0;

    return year_difference - one_or_zero;
}