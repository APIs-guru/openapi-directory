import { SpeakeasyBase } from "../../../internal/utils";
export declare class GitStatus extends SpeakeasyBase {
    ahead?: number;
    behind?: number;
    branch?: string;
    commit?: string;
    hasUncommittedChanges?: boolean;
    hasUnpushedChanges?: boolean;
}
