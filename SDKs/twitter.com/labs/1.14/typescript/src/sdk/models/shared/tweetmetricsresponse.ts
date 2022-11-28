import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TweetMetrics } from "./tweetmetrics";
import { GenericProblem } from "./genericproblem";
import { InvalidRequestProblem } from "./invalidrequestproblem";
import { ClientForbiddenProblem } from "./clientforbiddenproblem";
import { ResourceNotFoundProblem } from "./resourcenotfoundproblem";
import { ResourceUnauthorizedProblem } from "./resourceunauthorizedproblem";
import { DisallowedResourceProblem } from "./disallowedresourceproblem";
import { UnsupportedAuthenticationProblem } from "./unsupportedauthenticationproblem";
import { UsageCapExceededProblem } from "./usagecapexceededproblem";
import { ConnectionExceptionProblem } from "./connectionexceptionproblem";
import { ClientDisconnectedProblem } from "./clientdisconnectedproblem";
import { OperationalDisconnectProblem } from "./operationaldisconnectproblem";
import { RulesCapProblem } from "./rulescapproblem";
import { InvalidRuleProblem } from "./invalidruleproblem";
import { DuplicateRuleProblem } from "./duplicateruleproblem";



export class TweetMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TweetMetrics })
  data?: TweetMetrics[];

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: any[];
}
