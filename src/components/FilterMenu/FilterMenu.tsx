import React from "react";
import { Text } from "components";
import { AppTheme, useAppTheme } from "theme";
import { FilterIcon } from "assets/svg";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { optionsStyles, triggerStyles } from "./styles";
import { DEFAULT_FILTER_MENU_ITEMS } from "constants";

interface IFilterMenuProps {
  setSelectedFilter: (value: any) => void;
  selectedFilter: number;
}

const FilterMenu = (props: IFilterMenuProps) => {
  const theme = useAppTheme();
  const { setSelectedFilter, selectedFilter } = props;
  return (
    <Menu onSelect={(value) => setSelectedFilter(value)}>
      <MenuTrigger customStyles={triggerStyles}>
        <FilterIcon color={theme.colors.placeholderText[800]} />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        {DEFAULT_FILTER_MENU_ITEMS.map((item, index) => {
          return (
            <MenuOption
              value={item.value}
              key={`MenuOption ${item.id} ${index}`}
            >
              <Text
                style={{
                  color:
                    selectedFilter == item.value
                      ? theme.colors.themeColor[900]
                      : theme.colors.text_color[900],
                }}
              >
                {item.label}
              </Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};

export default FilterMenu;
