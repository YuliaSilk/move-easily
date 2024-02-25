import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi2';

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
`;

export const ImgContainer = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: ${p => p.theme.radius.m};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radius.m};
  object-position: center;
`;

export const FavBtn = styled.button`
  cursor: pointer;
  width: 16px;
  height: 14px;
  background: transparent;
  border-color: transparent;
  position: absolute;
  z-index: 100;
  top: 16px;
  right: 16px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeartSvg = styled(HiOutlineHeart)`
  width: 16px;
  height: 14px;
  fill: transparent;
  stroke-width: 1.5px;
  stroke: #fff;
  opacity: 80%;

  &:focus,
  &.favorite {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarTitle = styled.h2`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: ${p => p.theme.colors.colorwerbs};

  span {
    color: ${p => p.theme.colors.main};
  }
`;

export const CarDescription = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: ${p => p.theme.colors.colorwerbs};
  opacity: 50%;
`;

export const DescriptionContainer = styled.div`
  max-height: 40px;
  overflow: hidden;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
  margin-bottom: 28px;
`;

export const LearnMoreBtn = styled.button`
  cursor: pointer;
  width: 274px;
  height: 44px;
  background: ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius.m};
  border: none;
  padding: 12px;
  color: ${p => p.theme.colors.backgraund};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  :focus {
    background: ${p => p.theme.colors.acent};
  }
`;
