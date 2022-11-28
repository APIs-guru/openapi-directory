import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelSummary } from "./labelsummary";



export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labelSummary" })
  labelSummary?: LabelSummary;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=numOfDuplicates" })
  numOfDuplicates?: number;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=statusMsg" })
  statusMsg?: string;

  @SpeakeasyMetadata({ data: "json, name=totalExamples" })
  totalExamples?: number;

  @SpeakeasyMetadata({ data: "json, name=totalLabels" })
  totalLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
