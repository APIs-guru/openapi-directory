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
export var GetEarlyDayMotionsListParametersOrderByEnum;
(function (GetEarlyDayMotionsListParametersOrderByEnum) {
    GetEarlyDayMotionsListParametersOrderByEnum["DateTabledAsc"] = "DateTabledAsc";
    GetEarlyDayMotionsListParametersOrderByEnum["DateTabledDesc"] = "DateTabledDesc";
    GetEarlyDayMotionsListParametersOrderByEnum["TitleAsc"] = "TitleAsc";
    GetEarlyDayMotionsListParametersOrderByEnum["TitleDesc"] = "TitleDesc";
    GetEarlyDayMotionsListParametersOrderByEnum["SignatureCountAsc"] = "SignatureCountAsc";
    GetEarlyDayMotionsListParametersOrderByEnum["SignatureCountDesc"] = "SignatureCountDesc";
})(GetEarlyDayMotionsListParametersOrderByEnum || (GetEarlyDayMotionsListParametersOrderByEnum = {}));
export var GetEarlyDayMotionsListParametersStatusesEnum;
(function (GetEarlyDayMotionsListParametersStatusesEnum) {
    GetEarlyDayMotionsListParametersStatusesEnum["Published"] = "Published";
    GetEarlyDayMotionsListParametersStatusesEnum["Withdrawn"] = "Withdrawn";
})(GetEarlyDayMotionsListParametersStatusesEnum || (GetEarlyDayMotionsListParametersStatusesEnum = {}));
var GetEarlyDayMotionsListQueryParams = /** @class */ (function (_super) {
    __extends(GetEarlyDayMotionsListQueryParams, _super);
    function GetEarlyDayMotionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateEnd" }),
        __metadata("design:type", Date)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersCurrentStatusDateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateStart" }),
        __metadata("design:type", Date)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersCurrentStatusDateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.edmIds" }),
        __metadata("design:type", Array)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersEdmIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.includeSponsoredByMember" }),
        __metadata("design:type", Boolean)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersIncludeSponsoredByMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.isPrayer" }),
        __metadata("design:type", Boolean)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersIsPrayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.memberId" }),
        __metadata("design:type", Number)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.orderBy" }),
        __metadata("design:type", String)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersOrderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.searchTerm" }),
        __metadata("design:type", String)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersSearchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" }),
        __metadata("design:type", Number)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersSkip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.statuses" }),
        __metadata("design:type", Array)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledEndDate" }),
        __metadata("design:type", Date)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersTabledEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledStartDate" }),
        __metadata("design:type", Date)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersTabledStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" }),
        __metadata("design:type", Number)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersTake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.uINWithAmendmentSuffix" }),
        __metadata("design:type", String)
    ], GetEarlyDayMotionsListQueryParams.prototype, "parametersUInWithAmendmentSuffix", void 0);
    return GetEarlyDayMotionsListQueryParams;
}(SpeakeasyBase));
export { GetEarlyDayMotionsListQueryParams };
var GetEarlyDayMotionsListRequest = /** @class */ (function (_super) {
    __extends(GetEarlyDayMotionsListRequest, _super);
    function GetEarlyDayMotionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEarlyDayMotionsListQueryParams)
    ], GetEarlyDayMotionsListRequest.prototype, "queryParams", void 0);
    return GetEarlyDayMotionsListRequest;
}(SpeakeasyBase));
export { GetEarlyDayMotionsListRequest };
var GetEarlyDayMotionsListResponse = /** @class */ (function (_super) {
    __extends(GetEarlyDayMotionsListResponse, _super);
    function GetEarlyDayMotionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseListPublishedWrittenQuestion)
    ], GetEarlyDayMotionsListResponse.prototype, "apiResponseListPublishedWrittenQuestion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseObject)
    ], GetEarlyDayMotionsListResponse.prototype, "apiResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetEarlyDayMotionsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEarlyDayMotionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEarlyDayMotionsListResponse.prototype, "statusCode", void 0);
    return GetEarlyDayMotionsListResponse;
}(SpeakeasyBase));
export { GetEarlyDayMotionsListResponse };
