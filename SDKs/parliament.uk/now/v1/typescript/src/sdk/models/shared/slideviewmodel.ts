import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineViewModel } from "./lineviewmodel";


export enum SlideViewModelSoundToPlayEnum {
    NewSlide = "NewSlide",
    DivisionBell = "DivisionBell",
    Alert = "Alert",
    GenericBeep = "GenericBeep"
}

export enum SlideViewModelTypeEnum {
    Debate = "Debate",
    Division = "Division",
    OralQuestionTime = "OralQuestionTime",
    UrgentQuestion = "UrgentQuestion",
    Statement = "Statement",
    Prayers = "Prayers",
    HouseRisen = "HouseRisen",
    Generic = "Generic",
    NotSitting = "NotSitting",
    PrimeMinistersQuestions = "PrimeMinistersQuestions",
    PointsOfOrder = "PointsOfOrder",
    BlankSlide = "BlankSlide"
}


export class SlideViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carouselDisplaySeconds" })
  carouselDisplaySeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=carouselOrder" })
  carouselOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: LineViewModel })
  lines?: LineViewModel[];

  @SpeakeasyMetadata({ data: "json, name=slideTime" })
  slideTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=soundToPlay" })
  soundToPlay?: SlideViewModelSoundToPlayEnum;

  @SpeakeasyMetadata({ data: "json, name=speakerTime" })
  speakerTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SlideViewModelTypeEnum;
}
