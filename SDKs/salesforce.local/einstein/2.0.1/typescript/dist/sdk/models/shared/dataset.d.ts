import { SpeakeasyBase } from "../../../internal/utils";
import { LabelSummary } from "./labelsummary";
export declare class Dataset extends SpeakeasyBase {
    available?: boolean;
    createdAt?: Date;
    id: number;
    labelSummary?: LabelSummary;
    language?: string;
    name: string;
    numOfDuplicates?: number;
    object?: string;
    statusMsg?: string;
    totalExamples?: number;
    totalLabels?: number;
    type?: string;
    updatedAt?: Date;
}
