import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/text';
import { Column } from 'components/column';

import { Colors } from 'config/colors';
import { StyleFonts } from '@/config/fonts';

import { Container, TitleRow } from './styles';

const GensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 40px;
  }
`;
const GensWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type Prop = {
  gens: {
    max: number;
    value: string;
  }[];
  color: string;
};

export const BodyParts: React.FC<Prop> = ({ color, gens }) => {
  return (
    <Container color={color}>
      <TitleRow>
        <Text
          fontVariant={StyleFonts.FiraSansSemiBold}
          size="24px"
        >
          Body parts
        </Text>
        <img
          src="/icons/body.svg"
          alt="body"
        />
      </TitleRow>
      <GensWrapper>
        <GensContainer>
          {gens.map((gen, index) => (
            <Column
              key={`body-${index}`}
              color={Colors.White}
              max={Number(gen.max)}
              value={Number(gen.value)}
              invert={true}
            />
          ))}
        </GensContainer>
        <GensContainer>
          <svg viewBox="0 0 31 31" fill="none">
            <path d="M15.4687 3C8.48719 3 2.8125 8.82847 2.8125 15.9998C2.8125 23.1712 8.48711 29 15.4686 29C22.4502 29 28.125 23.1712 28.125 15.9998C28.125 8.82862 22.4503 3 15.4687 3ZM15.4687 4.43157C21.697 4.43157 26.7312 9.60231 26.7312 15.9998C26.7312 22.3975 21.697 27.5683 15.4687 27.5683C9.24042 27.5683 4.20643 22.3975 4.20643 15.9998C4.20643 9.60216 9.24042 4.43157 15.4687 4.43157ZM17.8518 6.41747C17.4937 6.41134 17.1337 6.44749 16.7744 6.53037C14.2103 7.12245 13.841 10.0515 16.825 10.3896C19.0652 10.6436 20.6282 14.4552 20.2285 17.3371C19.7295 20.9352 23.5901 20.7422 24.6404 17.1433C26.0072 12.4596 22.0767 6.49008 17.8518 6.41747ZM15.3841 11.4204L14.2016 14.705L11.89 14.2989L13.5834 16.3939L11.9479 18.4171L14.1156 18.0364L15.3841 21.5602L16.6524 18.0374L18.8428 18.4221L17.2032 16.3939L18.9008 14.2938L16.5663 14.7038L15.3841 11.4204Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M15.375 3C15.0855 5.78958 14.1461 8.09167 13.7094 9.75458C13.2574 9.89 12.8258 10.0742 12.4246 10.3125C11.0129 9.4675 8.81406 8.56292 6.75742 6.80792C8.39766 8.99625 9.2457 11.3471 10.043 12.8529C9.81953 13.2808 9.64687 13.7413 9.51992 14.2233C7.96094 14.6892 5.80273 15.6912 3.1875 16C5.80273 16.3088 7.96094 17.3108 9.51992 17.7767C9.64687 18.2587 9.81953 18.7192 10.043 19.1471C9.25078 20.6529 8.40273 22.9983 6.75742 25.1921C8.80898 23.4425 11.0129 22.5379 12.4246 21.6875C12.8258 21.9258 13.2574 22.11 13.7094 22.2454C14.1461 23.9083 15.0855 26.2104 15.375 29C15.6645 26.2104 16.6039 23.9083 17.0406 22.2454C17.4926 22.11 17.9242 21.9258 18.3254 21.6875C19.7371 22.5325 21.9359 23.4371 23.9926 25.1921C22.3523 23.0037 21.5043 20.6529 20.707 19.1471C20.9305 18.7192 21.1031 18.2587 21.2301 17.7767C22.7891 17.3108 24.9473 16.3088 27.5625 16C24.9473 15.6912 22.7891 14.6892 21.2301 14.2233C21.1031 13.7413 20.9305 13.2808 20.707 12.8529C21.4992 11.3471 22.3473 9.00167 23.9926 6.80792C21.941 8.5575 19.7371 9.46208 18.3254 10.3125C17.9242 10.0742 17.4926 9.89 17.0406 9.75458C16.6039 8.09167 15.6645 5.78958 15.375 3ZM15.375 12.75C16.218 12.75 16.9898 13.1021 17.5434 13.6871C18.0969 14.2775 18.4219 15.1008 18.4219 16C18.4219 16.8992 18.0918 17.7225 17.5434 18.3129C16.9898 18.8979 16.218 19.25 15.375 19.25C14.532 19.25 13.7602 18.8979 13.2066 18.3129C12.6582 17.7225 12.3281 16.8992 12.3281 16C12.3281 15.1008 12.6582 14.2775 13.2066 13.6871C13.7602 13.1021 14.532 12.75 15.375 12.75Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M9.24382 6C9.19771 6.05702 9.16079 6.09613 9.1004 6.18514C8.89741 6.48446 8.63692 6.9434 8.35343 7.49975C7.7866 8.61243 7.11978 10.1214 6.49167 11.6719C5.86356 13.2224 5.27223 14.8177 4.84978 16.1085C4.63849 16.7538 4.46947 17.324 4.36015 17.765C4.25083 18.2062 4.21988 18.5649 4.21954 18.5608C4.25639 19.0155 4.80655 20.068 5.67059 21.0362C6.49236 21.9571 7.56652 22.8413 8.58346 23.3966L10.1707 23.1408C9.62379 20.6127 9.27079 17.6988 9.40001 13.8999L10.6344 13.9451C10.5073 17.6817 10.8549 20.4851 11.3937 22.9438L12.5402 22.7589C13.462 21.8807 14.3824 20.6568 15.0471 19.4777C15.7408 18.2473 16.116 17.0131 16.0792 16.5584C16.0794 16.5626 15.995 16.234 15.8193 15.8423C15.6437 15.4505 15.3886 14.9506 15.0803 14.3906C14.4638 13.2705 13.6335 11.9061 12.7747 10.5975C11.916 9.28886 11.026 8.0327 10.2996 7.1338C9.93637 6.68446 9.61123 6.32328 9.37304 6.10316C9.31499 6.04956 9.28863 6.03526 9.24382 6ZM24.7813 7.74162C24.7327 7.77575 24.7012 7.79224 24.637 7.84543C24.3897 8.04983 24.0511 8.38293 23.6701 8.79729C22.9081 9.62601 21.966 10.7833 21.0511 11.9889C20.1363 13.1946 19.2457 14.4516 18.5782 15.4834C18.2443 15.9993 17.966 16.4599 17.7717 16.8203C17.5773 17.1806 17.4759 17.4912 17.4798 17.4661C17.4216 17.8513 17.7012 18.9731 18.2971 20.0976C18.8653 21.1699 19.6774 22.2848 20.5088 23.086L22.1153 23.3348C23.0365 20.7456 23.446 18.1415 23.7175 15.5026L24.9458 15.6383C24.678 18.2414 24.2726 20.8772 23.3616 23.5277L24.318 23.6759C25.35 23.1623 26.4558 22.3427 27.316 21.4898C28.2174 20.5961 28.8168 19.6071 28.875 19.2219C28.8712 19.2469 28.8661 18.9212 28.7872 18.5188C28.7081 18.1165 28.5783 17.593 28.4121 16.9998C28.0796 15.8134 27.6008 14.3444 27.0835 12.9172C26.5664 11.49 26.0088 10.1008 25.5264 9.0799C25.2852 8.56942 25.0606 8.14951 24.8855 7.88033C24.8409 7.81187 24.8169 7.78812 24.7813 7.74162Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M16.0625 9.5C16.0625 11.9853 13.754 14 10.9062 14C8.05853 14 5.75 11.9853 5.75 9.5C5.75 7.01472 8.05853 5 10.9062 5C13.754 5 16.0625 7.01472 16.0625 9.5Z" fill="#7777A3"/>
            <path d="M17.9375 22.5C17.9375 24.433 16.0487 26 13.7187 26C11.3888 26 9.5 24.433 9.5 22.5C9.5 20.567 11.3888 19 13.7187 19C16.0487 19 17.9375 20.567 17.9375 22.5Z" fill="#7777A3"/>
            <path d="M25.4375 13.5C25.4375 14.8807 23.9684 16 22.1562 16C20.3441 16 18.875 14.8807 18.875 13.5C18.875 12.1193 20.3441 11 22.1562 11C23.9684 11 25.4375 12.1193 25.4375 13.5Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M26.7364 6.59742C18.4464 4.58008 5.81853 10.93 16.883 17.6532C19.8851 19.4774 17.8213 24.1698 11.8327 21.4825C3.8513 17.901 4.43113 11.245 7.30576 7.76229C7.66027 8.39092 7.95541 9.09799 8.22257 9.84023C9.14025 7.37691 10.9313 6.35326 12.7221 5.32976L12.754 5.31149C10.2269 4.0581 7.81515 4.55767 5.44781 5.74013C5.94949 6.03304 6.37274 6.42869 6.73833 6.89868C1.24033 10.3618 2.97289 21.197 10.1955 25.5889C19.3874 31.1782 30.2777 18.8458 20.2736 14.8264C11.3884 11.2565 22.183 8.03209 26.75 9.84023L26.7364 6.59742Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M30.775 7C30.8312 7 30.875 7.04643 30.875 7.10612C30.875 7.15918 30.8437 7.19897 30.8 7.21223C27.6798 8.33973 25.3788 9.00296 23.8594 9.50038C23.0966 9.74578 22.5276 9.95138 22.1524 10.1437C21.9648 10.2366 21.8272 10.3361 21.7334 10.4223C21.6459 10.5085 21.6021 10.5881 21.5959 10.661C21.5896 10.7406 21.6084 10.8335 21.6772 10.9462C21.746 11.059 21.8585 11.1916 22.0211 11.3442C22.34 11.6492 22.8277 12.0207 23.4905 12.4982C24.8098 13.4466 26.7919 14.8062 29.3743 16.849C29.4181 16.8821 29.4306 16.9551 29.3993 17.0015C29.3681 17.0479 29.3118 17.0612 29.268 17.0347C26.5981 15.4628 24.5347 14.1828 23.0715 13.3538C22.34 12.9425 21.7585 12.6441 21.3333 12.4916C21.1207 12.412 20.9456 12.3655 20.8205 12.3589C20.6955 12.3523 20.6205 12.3788 20.5829 12.4186C20.5454 12.4584 20.5142 12.5247 20.5204 12.6574C20.5267 12.79 20.5642 12.9757 20.6455 13.2012C20.8018 13.6655 21.1019 14.3154 21.5584 15.171C22.4463 16.8755 23.9407 19.4024 26.0103 22.9175C26.0416 22.9706 26.0228 23.0369 25.9791 23.0701C25.9353 23.0966 25.879 23.09 25.8415 23.0436C23.5905 19.933 22.0774 17.5653 21.0394 16.0664C20.5204 15.3169 20.1265 14.7797 19.8264 14.4879C19.6763 14.342 19.5512 14.2557 19.4637 14.2292C19.3762 14.2027 19.3324 14.2093 19.2699 14.2756C19.1511 14.395 19.026 14.7996 18.9385 15.4628C18.8509 16.1261 18.7884 17.0546 18.7196 18.2617C18.5758 20.6692 18.4007 24.1777 17.9318 28.8999C17.9255 28.9596 17.8755 29.006 17.8192 28.9994C17.7629 28.9927 17.7254 28.9463 17.7254 28.8866C18.0256 18.6132 17.4378 12.3125 17.4378 12.3125C17.4315 12.2661 17.4628 12.213 17.5066 12.1997C17.5066 12.1997 17.9505 12.0406 18.4883 11.4834C19.026 10.9263 19.645 9.97127 19.9577 8.39942C19.9702 8.34636 20.0139 8.30656 20.0702 8.3132C23.4342 8.7045 26.5293 8.22698 30.7437 7.00663C30.7499 7 30.7625 7 30.775 7ZM0.967997 7C0.974249 7 0.986753 7 0.993006 7.00663C5.20737 8.22698 8.3025 8.7045 11.6602 8.28667C11.7103 8.28004 11.7603 8.31983 11.7728 8.37289C12.0854 9.95138 12.7044 10.8998 13.2422 11.4569C13.7799 12.014 14.2239 12.1732 14.2239 12.1732C14.2676 12.1931 14.2927 12.2395 14.2927 12.2859C14.2927 12.2859 13.7049 18.5866 14.005 28.8601C14.005 28.9198 13.9675 28.9728 13.905 28.9728C13.8487 28.9728 13.8049 28.933 13.7987 28.8734C13.3297 24.1511 13.1546 20.6427 13.0108 18.2351C12.9421 17.028 12.8795 16.0995 12.792 15.4363C12.7044 14.7731 12.5794 14.3751 12.4606 14.2491C12.3981 14.1894 12.3543 14.1762 12.2668 14.2027C12.1792 14.2292 12.0542 14.3154 11.9041 14.4613C11.604 14.7598 11.21 15.2904 10.6911 16.0398C9.65935 17.5387 8.14618 19.9065 5.88893 23.017C5.85141 23.0635 5.78888 23.0701 5.74511 23.0369C5.70134 23.0038 5.69509 22.9441 5.7201 22.891C7.79602 19.3759 9.28418 16.849 10.1908 15.1445C10.641 14.2889 10.9474 13.6389 11.1037 13.1747C11.1788 12.9425 11.2225 12.7568 11.2288 12.6308C11.235 12.4982 11.21 12.4319 11.1663 12.3921C11.1287 12.3523 11.0537 12.3257 10.9287 12.3324C10.8036 12.339 10.6285 12.3854 10.4159 12.465C9.99075 12.6242 9.40924 12.916 8.67766 13.3272C7.21452 14.1496 5.1511 15.4363 2.48117 17.0082C2.43114 17.0347 2.36862 17.0214 2.34361 16.9684C2.3186 16.9219 2.3311 16.8622 2.37487 16.8291C4.95726 14.7863 6.93939 13.4333 8.25873 12.4783C8.91527 12.0008 9.40924 11.6294 9.72813 11.3243C9.88445 11.1717 10.0033 11.0391 10.072 10.9263C10.1408 10.8136 10.1596 10.7207 10.1533 10.6411C10.1471 10.5615 10.1033 10.4886 10.0158 10.4024C9.92822 10.3162 9.7844 10.2233 9.59682 10.1238C9.22165 9.93148 8.65265 9.72588 7.88981 9.48048C6.36414 8.98969 4.06937 8.31983 0.949236 7.19234C0.892962 7.17244 0.861698 7.11275 0.880457 7.05969C0.880457 7.03316 0.917974 7 0.967997 7Z" fill="#7777A3"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="30" height="32" fill="white" transform="translate(0.875)"/>
              </clipPath>
            </defs>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M19.7015 4L19.7066 4.00524L17.9206 5.70264L19.809 5.50356L19.0209 7.08047L20.9655 6.23701C22.3012 9.90423 20.9962 14.3206 18.2737 14.9493C17.936 13.6186 16.5287 12.9637 16.4263 11.9422C16.4417 11.9474 16.457 11.9526 16.4724 11.9579C16.718 12.026 16.9688 12.0207 17.2042 11.9526L18.4887 13.1523L19.548 12.2932C19.1693 12.4399 18.0844 12.2198 17.849 11.565C18.0127 11.3973 18.1304 11.1825 18.197 10.9415C18.2225 10.8472 18.2379 10.7529 18.243 10.6586L18.8315 11.8531L19.0976 10.9677C19.4866 11.2611 19.7373 11.6802 19.6861 12.0731L20.5408 10.5329L16.8511 8.98219L13.8778 6.46752L14.7529 8.10729L12.2863 7.06999L14.0825 8.70453C12.0048 10.1819 12.9515 13.1576 13.9904 14.9545C11.0478 14.4464 8.71428 10.8996 9.08785 7.35813L11.6057 6.23701L10.0141 5.96982L11.5084 4.22003L9.87083 4.82251C9.87083 4.81727 9.87594 4.81727 9.87594 4.81203C1.25811 8.28541 3.9192 24.0388 6.61611 26.7106C6.60587 26.6425 6.59564 26.5744 6.59052 26.5063C5.82802 23.562 5.55167 19.9262 5.69496 16.5262C5.84849 12.9533 6.45235 9.65277 7.5782 7.64627L8.40723 8.13349C7.44002 9.86232 6.80034 13.0895 6.65193 16.5733C6.5547 18.8732 6.65705 21.2883 6.97433 23.4939C7.2865 23.5935 7.74195 23.9969 8.3714 24.7093C8.12577 24.0073 8.02342 23.321 8.03877 22.7028C9.07762 24.8875 11.4828 26.3282 13.3917 25.9667C14.538 25.7466 15.5308 25.3013 16.3496 24.6831L16.7231 25.4899C15.6945 25.7519 15.5563 27.1978 15.9709 28.3766C16.0579 27.334 16.5543 26.8154 17.0814 26.6844C16.7436 27.5174 16.8408 28.2875 16.9227 29C17.4396 28.3661 18.023 27.7531 18.1304 26.9359C18.5757 27.3183 18.7599 28.0622 18.1918 28.9843C19.5377 28.1723 19.809 26.7839 18.6012 25.9614L16.9585 24.1645C17.2605 23.8764 17.5317 23.5568 17.7722 23.2163L19.7834 24.044C19.5838 24.7617 20.0802 25.6943 20.7966 26.3124C20.3821 25.4061 20.551 24.7355 20.9297 24.3688C21.0116 25.2804 21.4721 25.8986 21.8867 26.4696C22.0248 25.6471 22.2347 24.8194 21.8764 24.0597C22.4394 24.1435 22.9613 24.6674 22.9153 25.7309C23.6522 24.4055 23.2274 23.1272 21.856 23.0329L18.2174 22.5142C18.8725 21.3093 19.1744 19.9053 19.0874 18.4541C19.8141 16.6362 21.6513 17.8359 21.8764 21.0316C23.2786 16.8248 25.3103 19.0094 24.8855 22.3152C25.4894 21.0893 26.0011 20.4816 26.4156 20.4187C25.8629 15.6041 24.3431 10.381 22.4445 7.28479L23.253 6.76614C25.8271 10.9625 27.608 18.3231 27.5978 24.1331C29.7676 18.056 27.475 5.44593 19.7015 4ZM18.197 28.9843C18.1918 28.9895 18.1918 28.9843 18.197 28.9843V28.9843ZM16.8204 10.1138C16.8664 10.1138 16.9125 10.119 16.9585 10.1295C17.2042 10.1976 17.3423 10.4386 17.2758 10.6901C17.2093 10.9415 16.9739 11.083 16.7282 11.0149C16.4826 10.9468 16.3444 10.7058 16.411 10.4543C16.4621 10.2657 16.6054 10.14 16.7794 10.119C16.7948 10.1138 16.8101 10.1138 16.8204 10.1138ZM13.5554 18.6479C14.1644 18.6375 14.712 19.0042 14.8962 19.8267C14.8962 21.7075 14.4049 23.4311 12.7417 23.8816C11.3293 24.264 9.17485 23.2844 8.43793 21.0683C9.06738 19.9629 10.3519 19.9158 11.6517 22.2523C11.0069 20.0729 12.3886 18.6689 13.5554 18.6479Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 31 32" fill="none">
            <path d="M4.97541 10.4902C-4.68371 23.4163 13.5081 21.3935 13.5081 21.3935C8.76724 18.0752 4.97541 10.4902 4.97541 10.4902ZM5.26996 19.2739C4.77871 18.4017 5.0142 16.9105 5.92796 14.977C6.12994 15.2593 6.35312 15.5604 6.59212 15.8774L7.71584 19.763L8.14627 17.8184C9.0645 18.9106 10.0461 19.9403 11.0852 20.9015C8.04572 21.0059 5.91742 20.4217 5.26996 19.2748V19.2739ZM26.2755 10.4902C26.2755 10.4902 22.4827 18.0752 17.7427 21.3935C17.7419 21.3935 35.9337 23.4163 26.2746 10.4902H26.2755ZM25.9809 19.2739C25.3335 20.4226 23.2051 21.0059 20.1657 20.9034C21.2048 19.9422 22.1864 18.9125 23.1046 17.8202L23.5341 19.763L24.6579 15.8746C24.8828 15.5774 25.1042 15.2773 25.322 14.9742C26.2358 16.9114 26.474 18.4017 25.98 19.2748L25.9809 19.2739Z" fill="#7777A3"/>
          </svg>
          <svg viewBox="0 0 30 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.373 19.4899C15.8421 22.4406 21.0771 23.6969 23.5797 22.5752C23.6171 22.5517 23.6587 22.5255 23.702 22.4923C24.434 22.0923 25.0919 21.3655 25.3229 20.13L25.4384 19.5274L24.8607 19.5472C24.5039 19.5608 24.0904 19.6039 23.8343 19.536C23.7083 19.5008 23.6313 19.4528 23.5769 19.3847C23.5224 19.3165 23.469 19.1995 23.456 18.9427L23.4145 17.7822L22.6732 18.6217C22.4555 18.8669 21.8793 18.9401 21.4436 18.7502C21.225 18.6588 21.0654 18.5122 20.9938 18.3825C20.9222 18.2529 20.897 18.1362 20.9917 17.902L21.4547 16.7616L20.3937 17.266C19.9505 17.4784 19.5459 17.3955 19.2911 17.2184C19.0362 17.0413 18.9459 16.8271 19.0208 16.5873L19.264 15.7898L18.4949 15.9602C18.1593 16.0326 17.8786 15.8899 17.8004 15.7584C17.7658 15.6958 17.742 15.6324 17.7641 15.5101C18.1583 15.1177 18.6404 14.9351 19.0913 15.0612C19.4999 15.1717 19.8137 15.5165 19.9951 15.9867C20.2919 15.6616 20.6628 15.4705 21.0595 15.4681C21.5798 15.4662 22.0548 15.788 22.4043 16.3091C22.7872 15.46 23.4303 14.8991 24.1606 14.8918C25.0253 14.8842 25.7796 15.6507 26.1391 16.7679C26.3125 14.6471 25.7087 12.4789 23.398 11.2392C21.3464 12.2641 19.2406 12.0039 17.8465 10.6578C17.2432 10.0733 16.2514 9.93198 15.1629 10.0622L15.1637 10.0737C13.6613 10.3678 12.4232 10.7547 11.2653 11.3984L11.2744 11.4047C11.1762 11.4604 11.078 11.5161 10.9865 11.5736C11.1904 13.0958 10.5345 14.3419 9.52381 15.3482C9.58694 16.0093 10.2452 17.763 12.373 19.4899ZM15.6982 14.2671C15.0045 12.7277 14.0082 12.6493 12.8499 13.3836C12.5837 13.551 12.3097 13.7654 12.0207 14.0133C13.1265 14.8782 14.2928 15.3556 15.6982 14.2671ZM16.989 14.9494C16.8239 14.9448 16.6602 14.9935 16.5038 15.0858C16.1535 15.294 15.8512 15.731 15.7152 16.2863C15.4998 17.1747 15.8023 18.0265 16.3858 18.1897C16.5516 18.236 16.7284 18.2213 16.8971 18.1513C16.9866 18.9624 17.3746 19.6038 17.9648 19.7689C18.4331 19.8961 18.9293 19.6985 19.3303 19.2778C19.5985 20.3921 20.3004 21.1856 21.122 21.1811C21.6771 21.1814 22.1683 20.8123 22.5061 20.2265C22.7999 20.7887 23.2097 21.2057 23.6753 21.3888C23.9159 21.1953 24.1129 20.9329 24.2564 20.5536C24.0548 20.5539 23.8349 20.5415 23.6095 20.4785C23.3534 20.4106 23.0768 20.2652 22.8771 20.0053C22.8128 19.9193 22.7609 19.8254 22.7149 19.7218C22.2037 19.9227 21.6081 19.8695 21.1078 19.654C20.7459 19.4961 20.4125 19.2479 20.2092 18.8698C20.1252 18.7178 20.0803 18.5352 20.0546 18.3466C19.5872 18.3935 19.1454 18.2737 18.7971 18.0289C18.4447 17.7867 18.1875 17.3822 18.1164 16.939C17.6751 16.8912 17.2678 16.6714 17.0298 16.2609C16.8626 15.9685 16.8128 15.5842 16.9007 15.2157C16.9251 15.1281 16.9537 15.0378 16.989 14.9494Z" fill="#7777A3"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.69187 8.76241C6.40311 8.94998 6.10421 9.18006 5.78606 9.44634C7.44072 9.64081 9.02855 10.1303 10.34 10.8297L10.548 10.6989C11.3109 10.2433 12.0966 9.89993 12.9392 9.62917C11.582 8.76581 10.4552 8.1672 9.40185 8.04643C8.57575 7.95143 7.75603 8.11143 6.81252 8.68655L6.69187 8.76241ZM3.44489 12.1892L3.35336 12.2467C2.77831 12.6263 2.22653 13.1901 1.67631 13.9697C4.47886 13.3401 7.37539 13.4283 9.31217 14.2044C9.95171 13.4951 10.1722 12.7782 10.1193 11.9622C7.94527 11.5582 6.24939 11.2993 4.88218 11.6048C4.37383 11.7196 3.90254 11.9014 3.44489 12.1892Z" fill="#7777A3"/>
          </svg>
        </GensContainer>
      </GensWrapper>
    </Container>
  );
};
