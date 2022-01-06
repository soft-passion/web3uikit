import React from 'react';

const cubeIcon = (fill: string, size: number) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>cube icon</title>
        <path
            d="M4.08247 7.50514C4 7.58743 4 7.66971 4 7.83429V16.2274C4 16.4743 4.08247 16.6389 4.3299 16.7211L11.6701 20.9177C11.7526 21 11.8351 21 12 21C12.0825 21 12.1649 21 12.3299 20.9177L19.6701 16.7211C19.835 16.6389 20 16.392 20 16.2274V7.83429C20 7.752 20 7.58743 19.9175 7.50514C19.8351 7.42286 19.7526 7.34057 19.6701 7.25829L12.1649 3.06171C12 2.97943 11.7526 2.97943 11.5876 3.06171L4.24742 7.25829C4.16495 7.34057 4.08247 7.42286 4.08247 7.50514ZM5.15464 15.8983V8.82171L11.2577 12.36V19.4366L5.15464 15.8983ZM18.5979 15.8983L12.4948 19.4366V12.36L18.5979 8.82171V15.8983ZM11.9175 4.296L18.0206 7.83429L11.9175 11.3726L5.81443 7.83429L11.9175 4.296ZM13.8144 13.1829C13.8969 13.0183 14.1443 12.936 14.3093 13.0183L17.0309 14.5817C17.1959 14.664 17.2783 14.9109 17.1959 15.0754C17.1134 15.24 16.866 15.3223 16.701 15.24L13.9794 13.6766C13.8144 13.5943 13.732 13.3474 13.8144 13.1829ZM11.9175 9.80914C11.6701 9.80914 11.5052 9.64457 11.5052 9.39771V6.18857C11.5052 5.94172 11.6701 5.77714 11.9175 5.77714C12.1649 5.77714 12.3299 5.94172 12.3299 6.18857V9.39771C12.2474 9.64457 12.0825 9.80914 11.9175 9.80914ZM9.93814 13.1829C10.0206 13.3474 10.0206 13.5943 9.7732 13.6766L7.05155 15.24C6.8866 15.3223 6.63918 15.3223 6.5567 15.0754C6.47423 14.9109 6.47423 14.664 6.72165 14.5817L9.4433 13.0183C9.60825 12.936 9.85567 12.936 9.93814 13.1829Z"
            fill={fill}
        />
    </svg>
);
export default cubeIcon;
