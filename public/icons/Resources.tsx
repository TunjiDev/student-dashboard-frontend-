import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1692_4133)">
      <path
        d="M18 15.75C17.625 15.75 17.25 15.6 16.95 15.3L14.7 13.05C14.4 12.75 14.25 12.375 14.25 12C14.25 11.625 14.4 11.25 14.7 10.95L16.95 8.7C17.25 8.4 17.625 8.25 18 8.25C18.375 8.25 18.75 8.4 19.05 8.7L21.3 10.95C21.6 11.25 21.75 11.625 21.75 12C21.75 12.375 21.6 12.75 21.3 13.05L19.05 15.3C18.75 15.6 18.375 15.75 18 15.75ZM18 9.75L15.75 12L18 14.25L20.25 12L18 9.75ZM12 9.75C11.625 9.75 11.25 9.6 10.95 9.3L8.7 7.05C8.4 6.75 8.25 6.375 8.25 6C8.25 5.625 8.4 5.25 8.7 4.95L10.95 2.7C11.25 2.4 11.625 2.25 12 2.25C12.375 2.25 12.75 2.4 13.05 2.7L15.3 4.95C15.6 5.25 15.75 5.625 15.75 6C15.75 6.375 15.6 6.75 15.3 7.05L13.05 9.3C12.75 9.6 12.375 9.75 12 9.75ZM12 3.75L9.75 6L12 8.25L14.25 6L12 3.75ZM12 21.75C11.625 21.75 11.25 21.6 10.95 21.3L8.7 19.05C8.4 18.75 8.25 18.375 8.25 18C8.25 17.625 8.4 17.25 8.7 16.95L10.95 14.7C11.25 14.4 11.625 14.25 12 14.25C12.375 14.25 12.75 14.4 13.05 14.7L15.3 16.95C15.6 17.25 15.75 17.625 15.75 18C15.75 18.375 15.6 18.75 15.3 19.05L13.05 21.3C12.75 21.6 12.375 21.75 12 21.75ZM12 15.75L9.75 18L12 20.25L14.25 18L12 15.75ZM6 15.75C5.625 15.75 5.25 15.6 4.95 15.3L2.7 13.05C2.4 12.75 2.25 12.375 2.25 12C2.25 11.625 2.4 11.25 2.7 10.95L4.95 8.7C5.25 8.4 5.625 8.25 6 8.25C6.375 8.25 6.75 8.4 7.05 8.7L9.3 10.95C9.6 11.25 9.75 11.625 9.75 12C9.75 12.375 9.6 12.75 9.3 13.05L7.05 15.3C6.75 15.6 6.375 15.75 6 15.75ZM6 9.75L3.75 12L6 14.25L8.25 12L6 9.75Z"
        fill="#F7FFFB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1692_4133">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
