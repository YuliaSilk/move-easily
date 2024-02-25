import styled from 'styled-components';
import { HiOutlineXMark } from 'react-icons/hi2';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  width: 541px;
  height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  position: relative;

  &.custom-modal {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-top: 3%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 10000;

    position: fixed;
  }

  &.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

export const CLoseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border: none;
  padding: 0;
  background-color: transparent;

  position: absolute;
  top: 24px;
  right: 24px;
`;

export const IconClose = styled(HiOutlineXMark)`
  width: 12px;
  height: 12px;
  border: none;
  padding: 0;
  stroke: #121417;
  stroke-width: 1.8px;
  transition: 200ms;

  &:hover,
  :focus {
    width: 16px;
    height: 16px;
  }
`;

export const AdvertImg = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  background: #f3f3f2;
  margin-bottom: 14px;
`;

export const AdvTitle = styled.h2`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.colorwerbs};

  span {
    color: ${p => p.theme.colors.main};
  }
`;
export const AdvSubDescrContainer = styled.div`
  width: 277px;
  max-height: 40px;
  overflow: hidden;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 28px;
`;

export const AdvSubDescr = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 14px;
  color: ${p => p.theme.colors.colorwerbs};
  opacity: 50%;
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.colorwerbs};
`;

export const AdvSubTitle = styled.h3`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.colorwerbs};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`;

export const Condition = styled.li`
  border-radius: 35px;
  padding: 7px 14px;
  min-width: fit-content;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: #f9f9f9;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #363535;
  flex: 1;
  margin-bottom: 8px;

  span {
    font-weight: 600;
    color: #3470ff;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 168px;
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

  .link {
    text-decoration: none;
  }

  &:hover,
  :focus {
    background: ${p => p.theme.colors.acent};
  }
`;
