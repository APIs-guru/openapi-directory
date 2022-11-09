var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChallengeEnumFactorTypesEnum } from "./challengeenumfactortypesenum";
import { ChallengeEnumChallengeReasonsEnum } from "./challengeenumchallengereasonsenum";
import { ChallengeEnumChallengeStatusesEnum } from "./challengeenumchallengestatusesenum";
var VerifyV2ServiceEntityChallenge = /** @class */ (function (_super) {
    __extends(VerifyV2ServiceEntityChallenge, _super);
    function VerifyV2ServiceEntityChallenge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceEntityChallenge.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_responded" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceEntityChallenge.prototype, "dateResponded", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceEntityChallenge.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=details" }),
        __metadata("design:type", Object)
    ], VerifyV2ServiceEntityChallenge.prototype, "details", void 0);
    __decorate([
        Metadata({ data: "json, name=entity_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "entitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=expiration_date" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceEntityChallenge.prototype, "expirationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=factor_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "factorSid", void 0);
    __decorate([
        Metadata({ data: "json, name=factor_type" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "factorType", void 0);
    __decorate([
        Metadata({ data: "json, name=hidden_details" }),
        __metadata("design:type", Object)
    ], VerifyV2ServiceEntityChallenge.prototype, "hiddenDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], VerifyV2ServiceEntityChallenge.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], VerifyV2ServiceEntityChallenge.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=responded_reason" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "respondedReason", void 0);
    __decorate([
        Metadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceEntityChallenge.prototype, "url", void 0);
    return VerifyV2ServiceEntityChallenge;
}(SpeakeasyBase));
export { VerifyV2ServiceEntityChallenge };
