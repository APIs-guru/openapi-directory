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
// QueryQueryGroup
/**
 * The querys' groups
**/
var QueryQueryGroup = /** @class */ (function (_super) {
    __extends(QueryQueryGroup, _super);
    function QueryQueryGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Group" }),
        __metadata("design:type", Array)
    ], QueryQueryGroup.prototype, "group", void 0);
    return QueryQueryGroup;
}(SpeakeasyBase));
export { QueryQueryGroup };
// QueryQueryVariable
/**
 * The querys' variables
**/
var QueryQueryVariable = /** @class */ (function (_super) {
    __extends(QueryQueryVariable, _super);
    function QueryQueryVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Variable" }),
        __metadata("design:type", Array)
    ], QueryQueryVariable.prototype, "variable", void 0);
    return QueryQueryVariable;
}(SpeakeasyBase));
export { QueryQueryVariable };
var QueryQuery = /** @class */ (function (_super) {
    __extends(QueryQuery, _super);
    function QueryQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ExcludeNullOrEmptyElements" }),
        __metadata("design:type", Boolean)
    ], QueryQuery.prototype, "excludeNullOrEmptyElements", void 0);
    __decorate([
        Metadata({ data: "json, name=Groups" }),
        __metadata("design:type", QueryQueryGroup)
    ], QueryQuery.prototype, "groups", void 0);
    __decorate([
        Metadata({ data: "json, name=RootNodeName" }),
        __metadata("design:type", String)
    ], QueryQuery.prototype, "rootNodeName", void 0);
    __decorate([
        Metadata({ data: "json, name=SuppressMetricAttributes" }),
        __metadata("design:type", Boolean)
    ], QueryQuery.prototype, "suppressMetricAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=Variables" }),
        __metadata("design:type", QueryQueryVariable)
    ], QueryQuery.prototype, "variables", void 0);
    return QueryQuery;
}(SpeakeasyBase));
export { QueryQuery };
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Query" }),
        __metadata("design:type", QueryQuery)
    ], Query.prototype, "query", void 0);
    return Query;
}(SpeakeasyBase));
export { Query };
