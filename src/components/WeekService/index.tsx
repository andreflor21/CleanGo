import React from "react";
import { ServiceData } from "../../types/ServiceData";

import {
  Container,
  CalendarWrapper,
  Calendar,
  WeekDay,
  DayTasks,
  Task,
  ErrorContainer,
} from "./styles";

interface WeekServiceProps {
  services: ServiceData[];
  servicesAccept: ServiceData[];
  error: boolean;
}

const WeekService = ({ services, servicesAccept, error }: WeekServiceProps) => {
  return (
    <Container>
      <h2>Serviços da semana</h2>
      <CalendarWrapper>
        <Calendar>
          {(error || servicesAccept.length === 0) && (
            <ErrorContainer>
              Não existem serviços aceitos para exibir
            </ErrorContainer>
          )}
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Segunda</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 1;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Terça</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 2;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Quarta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 3;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Quinta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 4;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Sexta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 5;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Sábado</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 6;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay error={error || servicesAccept.length === 0}>
            <h3>Domingo</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 0;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
        </Calendar>
      </CalendarWrapper>
    </Container>
  );
};

export default WeekService;
