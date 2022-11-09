import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelSummary } from "./labelsummary";


export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labelSummary" })
  labelSummary?: LabelSummary;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=numOfDuplicates" })
  numOfDuplicates?: number;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=statusMsg" })
  statusMsg?: string;

  @Metadata({ data: "json, name=totalExamples" })
  totalExamples?: number;

  @Metadata({ data: "json, name=totalLabels" })
  totalLabels?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
