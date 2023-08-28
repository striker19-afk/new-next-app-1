const DownloadIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM17.5 11L16.09 9.59L13.5 12.17V4H11.5V12.17L8.91 9.59L7.5 11L12.5 16L17.5 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DownloadIcon;
