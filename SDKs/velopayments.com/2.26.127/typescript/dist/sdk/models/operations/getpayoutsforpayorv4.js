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
export var GetPayoutsForPayorV4StatusEnum;
(function (GetPayoutsForPayorV4StatusEnum) {
    GetPayoutsForPayorV4StatusEnum["Accepted"] = "ACCEPTED";
    GetPayoutsForPayorV4StatusEnum["Rejected"] = "REJECTED";
    GetPayoutsForPayorV4StatusEnum["Submitted"] = "SUBMITTED";
    GetPayoutsForPayorV4StatusEnum["Quoted"] = "QUOTED";
    GetPayoutsForPayorV4StatusEnum["Instructed"] = "INSTRUCTED";
    GetPayoutsForPayorV4StatusEnum["Completed"] = "COMPLETED";
    GetPayoutsForPayorV4StatusEnum["Incomplete"] = "INCOMPLETE";
    GetPayoutsForPayorV4StatusEnum["Confirmed"] = "CONFIRMED";
    GetPayoutsForPayorV4StatusEnum["Withdrawn"] = "WITHDRAWN";
})(GetPayoutsForPayorV4StatusEnum || (GetPayoutsForPayorV4StatusEnum = {}));
var GetPayoutsForPayorV4QueryParams = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV4QueryParams, _super);
    function GetPayoutsForPayorV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromPayorName" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4QueryParams.prototype, "fromPayorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV4QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV4QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4QueryParams.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payoutMemo" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4QueryParams.prototype, "payoutMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4QueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4QueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], GetPayoutsForPayorV4QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], GetPayoutsForPayorV4QueryParams.prototype, "submittedDateTo", void 0);
    return GetPayoutsForPayorV4QueryParams;
}(SpeakeasyBase));
export { GetPayoutsForPayorV4QueryParams };
var GetPayoutsForPayorV4Request = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV4Request, _super);
    function GetPayoutsForPayorV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayoutsForPayorV4QueryParams)
    ], GetPayoutsForPayorV4Request.prototype, "queryParams", void 0);
    return GetPayoutsForPayorV4Request;
}(SpeakeasyBase));
export { GetPayoutsForPayorV4Request };
var GetPayoutsForPayorV4Response = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV4Response, _super);
    function GetPayoutsForPayorV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPayoutsResponse)
    ], GetPayoutsForPayorV4Response.prototype, "getPayoutsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV4Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV4Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV4Response.prototype, "inlineResponse404", void 0);
    return GetPayoutsForPayorV4Response;
}(SpeakeasyBase));
export { GetPayoutsForPayorV4Response };
