import { BoxSearch, IconSearch, SearchTools } from './header/Header.styles'

function Search() {
  return (
    <BoxSearch>
      <IconSearch
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4869 12.5973L22.6591 19.7036"
          stroke="#B1ADB9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M8.67798 14.6729C13.2044 14.6729 16.8738 11.4821 16.8738 7.54606C16.8738 3.61001 13.2044 0.41922 8.67798 0.41922C4.15153 0.41922 0.482117 3.61001 0.482117 7.54606C0.482117 11.4821 4.15153 14.6729 8.67798 14.6729Z"
          stroke="#B1ADB9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </IconSearch>

      <SearchTools type="search" placeholder="Search..." />
    </BoxSearch>
  )
}
export default Search
