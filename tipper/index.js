function isStringUpperCase(value) {
    const firstLetter = value.split('')[0];
    const firstLetterUpper = value.split('')[0].toUpperCase();

    if (firstLetter === firstLetterUpper) {
        return {valid:true}
    } else {
        return {valid:false, error: `Firstletter of '${value}' is not in upper case`};
    }
}
function isAllSplitStringUpperCase(value) {
    let valid = true;
    const splitted = value.split(' ');
    for (let i = 0; i < splitted.length; i++) {
        if (!isStringUpperCase(splitted[i]).valid) {
            valid = false;
            break;
        }

    }
    return valid? {valid} : {valid, error: 'All Initials should be in uppercase'};
}

module.exports = (req, res) => {
    const label = req.body.label
    const value = req.body.value.trim()
    console.log(label)
    const errors = []

    if(!value || value === '') {
        errors.push({ text: 'field is empty', serious: true })
        res.status(201).json({ success: false, data: errors })
        return
    }

    switch (label) {
        case 'name':
            if (!isAllSplitStringUpperCase(value).valid) {
                errors.push({ text: isAllSplitStringUpperCase(value).error, serious: true })

            }
            if (value.split(' ').length >3) {
                errors.push({ text: 'Name should contain first 3 names', serious: false })

            }
            break;
        case 'role':
            if (!isStringUpperCase(value).valid) {
                errors.push({ text: isStringUpperCase(value).error, serious: true })

            }
            break;

        default:
            break;
    }





    if (errors.length > 0) {
        res.status(201).json({ success: false, data: errors })
    } else {
        res.status(201).json({ success: true })
    }

}