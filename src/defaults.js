/* istanbul ignore next */
/**
 * Default values
 */
export default {
  fixtures: [],
  initialValue: '',
  placeholder: 'Search places',
  disabled: false,
  className: '',
  inputClassName: '',
  location: null,
  radius: null,
  bounds: null,
  country: null,
  types: null,
  queryDelay: 250,
  googleMaps: null,
  useNominatim: false,
  onActivateSuggest: () => {},
  onSuggestSelect: () => {},
  onSuggestNoResults: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  skipSuggest: () => {},
  showSuggests: () => {},
  getSuggestLabel: suggest => suggest.description,
  autoActivateFirstSuggest: false,
  style: {
    'input': {},
    'suggests': {},
    'suggestItem': {}
  },
  ignoreTab: false
};
