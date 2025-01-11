export default interface Contact {
  title: string;
  data: [
    {
      label: string;
      value: string;
      type: string;
      concat?: boolean;
    },
  ];
}
