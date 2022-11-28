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
export var ListGroups200ApplicationJsonActionEnum;
(function (ListGroups200ApplicationJsonActionEnum) {
    ListGroups200ApplicationJsonActionEnum["ListGroups"] = "listGroups";
})(ListGroups200ApplicationJsonActionEnum || (ListGroups200ApplicationJsonActionEnum = {}));
var ListGroups200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListGroups200ApplicationJsonData, _super);
    function ListGroups200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], ListGroups200ApplicationJsonData.prototype, "groups", void 0);
    return ListGroups200ApplicationJsonData;
}(SpeakeasyBase));
export { ListGroups200ApplicationJsonData };
export var ListGroups200ApplicationJsonResultEnum;
(function (ListGroups200ApplicationJsonResultEnum) {
    ListGroups200ApplicationJsonResultEnum["Success"] = "success";
    ListGroups200ApplicationJsonResultEnum["Error"] = "error";
})(ListGroups200ApplicationJsonResultEnum || (ListGroups200ApplicationJsonResultEnum = {}));
var ListGroups200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListGroups200ApplicationJson, _super);
    function ListGroups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListGroups200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListGroups200ApplicationJsonData)
    ], ListGroups200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListGroups200ApplicationJson.prototype, "result", void 0);
    return ListGroups200ApplicationJson;
}(SpeakeasyBase));
export { ListGroups200ApplicationJson };
var ListGroupsResponse = /** @class */ (function (_super) {
    __extends(ListGroupsResponse, _super);
    function ListGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListGroups200ApplicationJson)
    ], ListGroupsResponse.prototype, "listGroups200ApplicationJsonObject", void 0);
    return ListGroupsResponse;
}(SpeakeasyBase));
export { ListGroupsResponse };
