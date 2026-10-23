import { Flex, NumberInput } from "@mantine/core";

type FilterFieldProps = {
  value: string | number;
  onChange: (value: number | string) => void;
};

export function FilterField({ value, onChange }: FilterFieldProps) {
  return (
    <Flex justify="center" w="100%">
      <NumberInput
        label="Filter by amount"
        name="quantity"
        w="100%"
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
}
