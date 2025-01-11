export default interface Landing {
  id: number;
  attributes: {
    title: string;
    logo: {
      url: string;
    };
    description: string;
    company_name: string;
    main_img: {
      url: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    button_text: string;
  };
}
