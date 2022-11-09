import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=data", elemType: shared.TweetMetrics })
  data?: TweetMetrics[];

  @Metadata({ data: "json, name=errors" })
  errors?: any[];
}
