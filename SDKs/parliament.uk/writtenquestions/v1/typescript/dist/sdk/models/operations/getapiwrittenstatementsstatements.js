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
var GetApiWrittenstatementsStatementsQueryParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsQueryParams, _super);
    function GetApiWrittenstatementsStatementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" }),
        __metadata("design:type", Array)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "answeringBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" }),
        __metadata("design:type", Boolean)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "expandMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" }),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=madeWhenFrom" }),
        __metadata("design:type", Date)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "madeWhenFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=madeWhenTo" }),
        __metadata("design:type", Date)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "madeWhenTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=members" }),
        __metadata("design:type", Array)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "take", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uIN" }),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsQueryParams.prototype, "uIn", void 0);
    return GetApiWrittenstatementsStatementsQueryParams;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsQueryParams };
var GetApiWrittenstatementsStatementsRequest = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsRequest, _super);
    function GetApiWrittenstatementsStatementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenstatementsStatementsQueryParams)
    ], GetApiWrittenstatementsStatementsRequest.prototype, "queryParams", void 0);
    return GetApiWrittenstatementsStatementsRequest;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsRequest };
var GetApiWrittenstatementsStatementsResponse = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsResponse, _super);
    function GetApiWrittenstatementsStatementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiWrittenstatementsStatementsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiWrittenstatementsStatementsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StatementsViewModelSearchResult)
    ], GetApiWrittenstatementsStatementsResponse.prototype, "statementsViewModelSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiWrittenstatementsStatementsResponse.prototype, "statusCode", void 0);
    return GetApiWrittenstatementsStatementsResponse;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsResponse };
