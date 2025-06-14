'use client';

import { useState } from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';

const Options = [
  { value: 'AAA', label: 'AAA (Advanced Audio Coding) - AAA' },
  { value: 'BBB', label: 'BBB (Binary Bitstream Buffer) - BBB' },
  { value: 'CCC', label: 'CCC (Common Control Channel) - CCC' },
  { value: 'DDD', label: 'DDD (Dynamic Data Distribution) - DDD' },
  { value: 'None', label: 'None of above' },
];

const SelectDemo = () => {
  const [value, setValue] = useState(Options[0].value);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[280px] bg-blue-50 font-bold text-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:ring-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="data-[side=bottom]:translate-y-0" align="end">
        <SelectGroup>
          {Options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
