import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyV2VerificationAttemptsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversion_rate_percentage" })
  conversionRatePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_attempts" })
  totalAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=total_converted" })
  totalConverted?: number;

  @SpeakeasyMetadata({ data: "json, name=total_unconverted" })
  totalUnconverted?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
