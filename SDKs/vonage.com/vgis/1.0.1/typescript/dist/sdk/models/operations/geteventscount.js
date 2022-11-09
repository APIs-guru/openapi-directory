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
export var GetEventsCountDirectionEnum;
(function (GetEventsCountDirectionEnum) {
    GetEventsCountDirectionEnum["Inbound"] = "INBOUND";
    GetEventsCountDirectionEnum["Outbound"] = "OUTBOUND";
})(GetEventsCountDirectionEnum || (GetEventsCountDirectionEnum = {}));
export var GetEventsCountStatesEnum;
(function (GetEventsCountStatesEnum) {
    GetEventsCountStatesEnum["Initializing"] = "INITIALIZING";
    GetEventsCountStatesEnum["Ringing"] = "RINGING";
    GetEventsCountStatesEnum["Active"] = "ACTIVE";
    GetEventsCountStatesEnum["Held"] = "HELD";
    GetEventsCountStatesEnum["RemoteHeld"] = "REMOTE_HELD";
})(GetEventsCountStatesEnum || (GetEventsCountStatesEnum = {}));
var GetEventsCountQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsCountQueryParams, _super);
    function GetEventsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetEventsCountQueryParams.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", Number)
    ], GetEventsCountQueryParams.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", String)
    ], GetEventsCountQueryParams.prototype, "states", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", Number)
    ], GetEventsCountQueryParams.prototype, "toDate", void 0);
    return GetEventsCountQueryParams;
}(SpeakeasyBase));
export { GetEventsCountQueryParams };
var GetEventsCountRequest = /** @class */ (function (_super) {
    __extends(GetEventsCountRequest, _super);
    function GetEventsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventsCountQueryParams)
    ], GetEventsCountRequest.prototype, "queryParams", void 0);
    return GetEventsCountRequest;
}(SpeakeasyBase));
export { GetEventsCountRequest };
var GetEventsCountResponse = /** @class */ (function (_super) {
    __extends(GetEventsCountResponse, _super);
    function GetEventsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEventsCountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetEventsCountResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventsCount)
    ], GetEventsCountResponse.prototype, "eventsCount", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEventsCountResponse.prototype, "statusCode", void 0);
    return GetEventsCountResponse;
}(SpeakeasyBase));
export { GetEventsCountResponse };
