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
import * as shared from "../shared";
export var GetEventsTypeEnum;
(function (GetEventsTypeEnum) {
    GetEventsTypeEnum["All"] = "all";
    GetEventsTypeEnum["Clicks"] = "clicks";
    GetEventsTypeEnum["Contacts"] = "contacts";
})(GetEventsTypeEnum || (GetEventsTypeEnum = {}));
var GetEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsQueryParams, _super);
    function GetEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "company", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=deal" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "deal", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nexttoken" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "nexttoken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=queryexecutionid" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "queryexecutionid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "site", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "type", void 0);
    return GetEventsQueryParams;
}(SpeakeasyBase));
export { GetEventsQueryParams };
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    function GetEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventsQueryParams)
    ], GetEventsRequest.prototype, "queryParams", void 0);
    return GetEventsRequest;
}(SpeakeasyBase));
export { GetEventsRequest };
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    function GetEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEventsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.EventRecord }),
        __metadata("design:type", Array)
    ], GetEventsResponse.prototype, "eventRecords", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEventsResponse.prototype, "statusCode", void 0);
    return GetEventsResponse;
}(SpeakeasyBase));
export { GetEventsResponse };
