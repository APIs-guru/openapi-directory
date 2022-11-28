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
var ListAcceptedNodesQueryParams = /** @class */ (function (_super) {
    __extends(ListAcceptedNodesQueryParams, _super);
    function ListAcceptedNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=composition" }),
        __metadata("design:type", String)
    ], ListAcceptedNodesQueryParams.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], ListAcceptedNodesQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=query" }),
        __metadata("design:type", shared.NodeQuery)
    ], ListAcceptedNodesQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], ListAcceptedNodesQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=where", elemType: shared.NodeWhere }),
        __metadata("design:type", Array)
    ], ListAcceptedNodesQueryParams.prototype, "where", void 0);
    return ListAcceptedNodesQueryParams;
}(SpeakeasyBase));
export { ListAcceptedNodesQueryParams };
export var ListAcceptedNodes200ApplicationJsonActionEnum;
(function (ListAcceptedNodes200ApplicationJsonActionEnum) {
    ListAcceptedNodes200ApplicationJsonActionEnum["ListAcceptedNodes"] = "listAcceptedNodes";
})(ListAcceptedNodes200ApplicationJsonActionEnum || (ListAcceptedNodes200ApplicationJsonActionEnum = {}));
// ListAcceptedNodes200ApplicationJsonData
/**
 * Information about the nodes
**/
var ListAcceptedNodes200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAcceptedNodes200ApplicationJsonData, _super);
    function ListAcceptedNodes200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], ListAcceptedNodes200ApplicationJsonData.prototype, "nodes", void 0);
    return ListAcceptedNodes200ApplicationJsonData;
}(SpeakeasyBase));
export { ListAcceptedNodes200ApplicationJsonData };
export var ListAcceptedNodes200ApplicationJsonResultEnum;
(function (ListAcceptedNodes200ApplicationJsonResultEnum) {
    ListAcceptedNodes200ApplicationJsonResultEnum["Success"] = "success";
    ListAcceptedNodes200ApplicationJsonResultEnum["Error"] = "error";
})(ListAcceptedNodes200ApplicationJsonResultEnum || (ListAcceptedNodes200ApplicationJsonResultEnum = {}));
var ListAcceptedNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAcceptedNodes200ApplicationJson, _super);
    function ListAcceptedNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListAcceptedNodes200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListAcceptedNodes200ApplicationJsonData)
    ], ListAcceptedNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListAcceptedNodes200ApplicationJson.prototype, "result", void 0);
    return ListAcceptedNodes200ApplicationJson;
}(SpeakeasyBase));
export { ListAcceptedNodes200ApplicationJson };
var ListAcceptedNodesRequest = /** @class */ (function (_super) {
    __extends(ListAcceptedNodesRequest, _super);
    function ListAcceptedNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAcceptedNodesQueryParams)
    ], ListAcceptedNodesRequest.prototype, "queryParams", void 0);
    return ListAcceptedNodesRequest;
}(SpeakeasyBase));
export { ListAcceptedNodesRequest };
var ListAcceptedNodesResponse = /** @class */ (function (_super) {
    __extends(ListAcceptedNodesResponse, _super);
    function ListAcceptedNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAcceptedNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAcceptedNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAcceptedNodes200ApplicationJson)
    ], ListAcceptedNodesResponse.prototype, "listAcceptedNodes200ApplicationJsonObject", void 0);
    return ListAcceptedNodesResponse;
}(SpeakeasyBase));
export { ListAcceptedNodesResponse };
