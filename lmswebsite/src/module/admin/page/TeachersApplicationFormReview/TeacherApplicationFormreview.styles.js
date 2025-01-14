import styled from "styled-components";
import { media, theme } from "../../../../style/theme/theme";

export const TeacherApplicationFormReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.backgroundLight};

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.bgcolor};
    padding: 5px 10px;
    border-radius: 0px 0px 0 0;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-header h2 {
    margin: 0;

    font-size: 18px;
    font-weight: 400;
  }

  .Values {
    font-size: 16px;
    font-weight: 600;
  }

  .teacher-details-heading {
    font-size: 14px;
    font-weight: 400;
  }

  .teacher-details-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .view-resume-btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .view-resume-btn:hover {
    background-color: #45a049;
  }

   .approve-btn {
  

    background-color:rgb(112, 159, 9);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
  }

  .approve-btn:hover {
    background-color: #45a049;
  }


  .teacher-details-item {
    flex: 1;
    margin-right: 10px;
  }

  .teacher-details-item:last-child {
    margin-right: 0;
  }

  .teacher-details-item p {
    margin: 5px 0;
  }

  .close-btn {
    display: flex;

    align-items: center;
  }

  .TeacherApplicationFormReview-teacherContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: white;
    padding: 20px;
    border-radius: 8px;

    ${media.md`
      padding: 1em;
    `}
  }

  .TeacherApplicationFormReview-teacherTitle {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.8rem;
    font-weight: bold;
    color: ${theme.colors.primary};
    margin: 0;

    ${media.xl`
      font-size: 1.6rem;
    `}
    ${media.lg`
      font-size: 1.5rem;
    `}
    ${media.md`
      font-size: 1.4rem;
    `}
    ${media.sm`
      font-size: 1.2rem;
    `}
    ${media.xs`
      font-size: 1rem;
    `}
  }

  .TeacherApplicationFormReview-teacherSubtitle {
    font-size: 1.4rem;
    color: ${theme.colors.secondary};

    ${media.xl`
      font-size: 1.3rem;
    `}
    ${media.lg`
      font-size: 1.2rem;
    `}
    ${media.md`
      font-size: 1.1rem;
    `}
    ${media.sm`
      font-size: 1rem;
    `}
    ${media.xs`
      font-size: 0.9rem;
    `}
  }

  .TeacherApplicationFormReview-profile-placeholders {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.lightGray};
    padding: 10px;
    border-radius: 8px;

    img {
      width: 180px;
      height: 180px;
      border-radius: 10%;

      ${media.md`
        max-width: 80px;
        max-height: 80px;
      `}
    }
  }

  .TeacherApplicationFormReview-field {
    display: flex;
    flex-direction: row;
    gap: 20px;

    label {
      width: 30%;
      font-size: 1.2rem;
      color: ${theme.colors.textSecondary};

      ${media.lg`
        width: 40%;
        font-size: 1rem;
      `}
      ${media.md`
        width: 100%;
        font-size: 1rem;
        margin-bottom: 3px; /* Adds space between label and input */
      `}
      ${media.sm`
        font-size: 1.1rem;
      `}
      ${media.xs`
        font-size:1rem;
      `}
    }

    input {
      width: 70%;
      padding: 9px;
      font-size: 1rem;
      border: 1px solid ${theme.colors.border};
      border-radius: 4px;
      background-color: ${theme.colors.inputBackground};
      color: ${theme.colors.textPrimary};

      &::placeholder {
        color: ${theme.colors.gray700};
      }

      ${media.lg`
        width: 60%;
        font-size: 1.3rem;
      `}
      ${media.md`
        width: 100%;
        font-size: 1.2rem;
      `}
      ${media.sm`
        font-size: 1.1rem;
      `}
      ${media.xs`
        font-size: 1rem;
      `}
    }

    ${media.md`
      flex-direction: column;
      align-items: stretch;
    `}
  }

  .TeacherApplicationFormReview-resume-placeholder {
    text-align: center;

    a {
      color: ${theme.colors.dodgerBlue};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .TeacherApplicationFormReview-Contact {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      flex: 0 0 auto;
    }
     

    #TeacherApplicationFormReview-TeacherReject {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.red};
      &:hover {
        background-color: ${theme.colors.dangerDark};
      }
    }

    #TeacherApplicationFormReview-TeacherApprove {
      background-color: ${theme.colors.success};
      color: ${theme.colors.gray700};
      &:hover {
        background-color: ${theme.colors.successDark};
      }
    }

    ${media.md`
      flex-direction: column;
      button {
        width: 100%;
        margin-top: 10px;
      }
    `}
  }

  .error_message {
    color: ${theme.colors.error};
    text-align: center;
  }

  .area-row {
    display: flex;
    gap: 24px;

    &.ar-one {
      justify-content: space-between;
    }

    &.ar-two {
      justify-content: space-between;
      align-items: flex-start;
    }

    &.ar-three {
      display: block;
    }

    ${media.md`
      flex-direction: column;
    `}
  }

  ${media.sm`
    padding: 1em;
  `}

  ${media.xs`
    .TeacherApplicationFormReview-profile-placeholders img {
      max-width: 70px;
      max-height: 70px;
    }
  `}
`;
