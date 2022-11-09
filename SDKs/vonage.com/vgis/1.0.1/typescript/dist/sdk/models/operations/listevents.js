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
export var ListEventsDirectionEnum;
(function (ListEventsDirectionEnum) {
    ListEventsDirectionEnum["Inbound"] = "INBOUND";
    ListEventsDirectionEnum["Outbound"] = "OUTBOUND";
})(ListEventsDirectionEnum || (ListEventsDirectionEnum = {}));
export var ListEventsOrderEnum;
(function (ListEventsOrderEnum) {
    ListEventsOrderEnum["Desc"] = "DESC";
    ListEventsOrderEnum["Asc"] = "ASC";
})(ListEventsOrderEnum || (ListEventsOrderEnum = {}));
export var ListEventsStatesEnum;
(function (ListEventsStatesEnum) {
    ListEventsStatesEnum["Initializing"] = "INITIALIZING";
    ListEventsStatesEnum["Ringing"] = "RINGING";
    ListEventsStatesEnum["Active"] = "ACTIVE";
    ListEventsStatesEnum["Held"] = "HELD";
    ListEventsStatesEnum["RemoteHeld"] = "REMOTE_HELD";
    ListEventsStatesEnum["Detached"] = "DETACHED";
    ListEventsStatesEnum["Rejected"] = "REJECTED";
    ListEventsStatesEnum["Cancelled"] = "CANCELLED";
    ListEventsStatesEnum["Answered"] = "ANSWERED";
    ListEventsStatesEnum["Missed"] = "MISSED";
})(ListEventsStatesEnum || (ListEventsStatesEnum = {}));
export var ListEventsTypesEnum;
(function (ListEventsTypesEnum) {
    ListEventsTypesEnum["Call"] = "CALL";
})(ListEventsTypesEnum || (ListEventsTypesEnum = {}));
var ListEventsQueryParams = /** @class */ (function (_super) {
    __extends(ListEventsQueryParams, _super);
    function ListEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "states", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "toDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "types", void 0);
    return ListEventsQueryParams;
}(SpeakeasyBase));
export { ListEventsQueryParams };
var ListEventsRequest = /** @class */ (function (_super) {
    __extends(ListEventsRequest, _super);
    function ListEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventsQueryParams)
    ], ListEventsRequest.prototype, "queryParams", void 0);
    return ListEventsRequest;
}(SpeakeasyBase));
export { ListEventsRequest };
var ListEventsResponse = /** @class */ (function (_super) {
    __extends(ListEventsResponse, _super);
    function ListEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEventsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ListEventsResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ListEventsResponse.prototype, "events", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEventsResponse.prototype, "statusCode", void 0);
    return ListEventsResponse;
}(SpeakeasyBase));
export { ListEventsResponse };
