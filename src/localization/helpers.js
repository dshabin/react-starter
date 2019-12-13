import resources from './resources'

export const translate = (language, word) => {
    if (!language) {
        language = 'english'
    }
    let localized = resources[language]['translations'][word]
    if(!localized){
        localized = word
    }
    return localized
}


export const getLanguageDir = (language) => {
    if (!language) {
        language = 'english'
    }
    return resources[language]['options']['direction']
}
