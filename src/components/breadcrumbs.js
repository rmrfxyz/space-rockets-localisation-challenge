import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";

import { useTranslation } from 'react-i18next';
import camelCase from "camelcase";

export default function Breadcrumbs({ items }) {
  const { t } = useTranslation();
 
  return (
    <Breadcrumb
      m="6"
      spacing="1"
      separator={<Box size="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;

        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={item.label}>
            <BreadcrumbLink
              as={!isCurrentPage ? Link : undefined}
              to={!isCurrentPage ? item.to : undefined}
              textTransform='capitalize'
            >
              {t('breadCrumbs.' + camelCase(item.label))}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
