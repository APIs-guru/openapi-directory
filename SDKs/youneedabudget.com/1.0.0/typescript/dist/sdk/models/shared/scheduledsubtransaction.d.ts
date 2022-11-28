import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduledSubTransaction extends SpeakeasyBase {
    amount: number;
    categoryId?: string;
    deleted: boolean;
    id: string;
    memo?: string;
    payeeId?: string;
    scheduledTransactionId: string;
    transferAccountId?: string;
}
