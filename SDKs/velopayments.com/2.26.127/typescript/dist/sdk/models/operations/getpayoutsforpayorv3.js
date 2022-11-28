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
export var GetPayoutsForPayorV3StatusEnum;
(function (GetPayoutsForPayorV3StatusEnum) {
    GetPayoutsForPayorV3StatusEnum["Accepted"] = "ACCEPTED";
    GetPayoutsForPayorV3StatusEnum["Rejected"] = "REJECTED";
    GetPayoutsForPayorV3StatusEnum["Submitted"] = "SUBMITTED";
    GetPayoutsForPayorV3StatusEnum["Quoted"] = "QUOTED";
    GetPayoutsForPayorV3StatusEnum["Instructed"] = "INSTRUCTED";
    GetPayoutsForPayorV3StatusEnum["Completed"] = "COMPLETED";
    GetPayoutsForPayorV3StatusEnum["Incomplete"] = "INCOMPLETE";
    GetPayoutsForPayorV3StatusEnum["Confirmed"] = "CONFIRMED";
    GetPayoutsForPayorV3StatusEnum["Withdrawn"] = "WITHDRAWN";
})(GetPayoutsForPayorV3StatusEnum || (GetPayoutsForPayorV3StatusEnum = {}));
var GetPayoutsForPayorV3QueryParams = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV3QueryParams, _super);
    function GetPayoutsForPayorV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV3QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV3QueryParams.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payoutMemo" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV3QueryParams.prototype, "payoutMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV3QueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV3QueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], GetPayoutsForPayorV3QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], GetPayoutsForPayorV3QueryParams.prototype, "submittedDateTo", void 0);
    return GetPayoutsForPayorV3QueryParams;
}(SpeakeasyBase));
export { GetPayoutsForPayorV3QueryParams };
var GetPayoutsForPayorV3Request = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV3Request, _super);
    function GetPayoutsForPayorV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayoutsForPayorV3QueryParams)
    ], GetPayoutsForPayorV3Request.prototype, "queryParams", void 0);
    return GetPayoutsForPayorV3Request;
}(SpeakeasyBase));
export { GetPayoutsForPayorV3Request };
var GetPayoutsForPayorV3Response = /** @class */ (function (_super) {
    __extends(GetPayoutsForPayorV3Response, _super);
    function GetPayoutsForPayorV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayoutsForPayorV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPayoutsResponseV3)
    ], GetPayoutsForPayorV3Response.prototype, "getPayoutsResponseV3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayoutsForPayorV3Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV3Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayoutsForPayorV3Response.prototype, "inlineResponse404", void 0);
    return GetPayoutsForPayorV3Response;
}(SpeakeasyBase));
export { GetPayoutsForPayorV3Response };
