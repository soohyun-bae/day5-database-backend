// model : prisma client로 백엔드와 소통하는 부분
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// 여러 개 조회할 때는 pagination기능을 넣는다.
export const filmFindMany = async (pageStart, pageEnd) => {
  return prisma.film.findMany({
    skip: pageStart,
    take: pageEnd
  });
};

export const filmFindOne = async (film_id) => {
  return prisma.film.findUnique({
    where: {
      film_id: film_id,
    },
  });
};

// prisma에서 select하는 방법 :
// findMany
// findUnique
// findFirst : primary키 또는 unique키가 없을 경우 제일 먼저 나오는 것을 리턴
