import { useState } from "react";
import itemsJson from '../json/items.json'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

interface ItemData {
  LocalizationNameVariable: string;
  LocalizationDescriptionVariable: string;
  LocalizedNames: {
    [key: string]: string;
  };
  LocalizedDescriptions: {
    [key: string]: string;
  };
  Index: string;
  UniqueName: string;
}

function ItemList() {
    const [items] = useState<ItemData[]>(itemsJson as ItemData[])
    const [selectedItem, setSelectedItem] = useState<ItemData | null>(items[0])
    const [query, setQuery] = useState('')

    const filteredItem =
        query === ''
        ? items
        : items.filter((items) => {
            return items.LocalizedNames['EN-US'].toLowerCase().includes(query.toLowerCase())
            })

    return (
        <>
            <Combobox value={selectedItem} onChange={setSelectedItem} onClose={() => setQuery('')}>
            <ComboboxInput
                aria-label="Assignee"
                displayValue={(item: ItemData) => item?.UniqueName}
                onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxOptions anchor="bottom" className="border empty:invisible">
                {filteredItem.map((item) => (
                <ComboboxOption key={item.Index} value={item} className="data-focus:bg-blue-100">
                    {item.LocalizedNames['EN-US']}
                </ComboboxOption>
                ))}
            </ComboboxOptions>
            </Combobox>
        </>
    )
}

export {ItemList}