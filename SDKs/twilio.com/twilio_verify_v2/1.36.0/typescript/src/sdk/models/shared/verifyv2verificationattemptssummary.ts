import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2VerificationAttemptsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversion_rate_percentage" })
  conversionRatePercentage?: number;

  @Metadata({ data: "json, name=total_attempts" })
  totalAttempts?: number;

  @Metadata({ data: "json, name=total_converted" })
  totalConverted?: number;

  @Metadata({ data: "json, name=total_unconverted" })
  totalUnconverted?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
