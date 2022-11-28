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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var GetApiMembersSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchQueryParams, _super);
    function GetApiMembersSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConstituencyId" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "constituencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Experience" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "experience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Gender" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=House" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsCurrentMember" }),
        __metadata("design:type", Boolean)
    ], GetApiMembersSearchQueryParams.prototype, "isCurrentMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsEligible" }),
        __metadata("design:type", Boolean)
    ], GetApiMembersSearchQueryParams.prototype, "isEligible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Location" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndReasonIds" }),
        __metadata("design:type", Array)
    ], GetApiMembersSearchQueryParams.prototype, "membershipEndedMembershipEndReasonIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndedSince" }),
        __metadata("design:type", Date)
    ], GetApiMembersSearchQueryParams.prototype, "membershipEndedMembershipEndedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOfHouse" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "membershipInDateRangeWasMemberOfHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrAfter" }),
        __metadata("design:type", Date)
    ], GetApiMembersSearchQueryParams.prototype, "membershipInDateRangeWasMemberOnOrAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrBefore" }),
        __metadata("design:type", Date)
    ], GetApiMembersSearchQueryParams.prototype, "membershipInDateRangeWasMemberOnOrBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipStartedSince" }),
        __metadata("design:type", Date)
    ], GetApiMembersSearchQueryParams.prototype, "membershipStartedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NameStartsWith" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "nameStartsWith", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PartyId" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "partyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyInterestId" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "policyInterestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PostTitle" }),
        __metadata("design:type", String)
    ], GetApiMembersSearchQueryParams.prototype, "postTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetApiMembersSearchQueryParams.prototype, "take", void 0);
    return GetApiMembersSearchQueryParams;
}(SpeakeasyBase));
export { GetApiMembersSearchQueryParams };
var GetApiMembersSearchRequest = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchRequest, _super);
    function GetApiMembersSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiMembersSearchQueryParams)
    ], GetApiMembersSearchRequest.prototype, "queryParams", void 0);
    return GetApiMembersSearchRequest;
}(SpeakeasyBase));
export { GetApiMembersSearchRequest };
var GetApiMembersSearchResponse = /** @class */ (function (_super) {
    __extends(GetApiMembersSearchResponse, _super);
    function GetApiMembersSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiMembersSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiMembersSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MemberMembersServiceSearchResult)
    ], GetApiMembersSearchResponse.prototype, "memberMembersServiceSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiMembersSearchResponse.prototype, "statusCode", void 0);
    return GetApiMembersSearchResponse;
}(SpeakeasyBase));
export { GetApiMembersSearchResponse };
